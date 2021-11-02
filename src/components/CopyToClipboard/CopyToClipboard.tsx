import React, {FC, useCallback, useRef, useState} from 'react';
import { ClipboardButton, useStyles } from '@grafana/ui';
import { ButtonProps } from '@grafana/ui/components/Button';
import { usePopper } from 'react-popper';
import { Options as PopperOptions } from '@popperjs/core/lib/types';
import { getStyles } from './CopyToClipboard.styles';

export interface ClipboardIconButtonProps extends ButtonProps {
  textContainer: React.MutableRefObject<any>;
}

const popperConfig: Partial<PopperOptions> = {
  placement: 'auto',
  modifiers: [
    {
      name: 'offset',
      enabled: true,
      options: {
        offset: [0, 10],
      },
    },
  ],
};

export const CopyToClipboard: FC<ClipboardIconButtonProps> = (props) => {
  const styles = useStyles(getStyles);

  const { textContainer, ...rest } = props;

  const [tooltipText, setTooltipText] = useState('');
  const [visible, setVisible] = useState(false);

  const copyToClipboard = useCallback(() => textContainer.current?.textContent? textContainer.current?.textContent : '', [textContainer]);

  const popperRef = useRef(null);
  const toggleRef = useRef(null);

  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    toggleRef.current,
    popperRef.current,
    popperConfig,
  );

  const showTooltip = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  const onClipboardCopy = () => {
    setTooltipText('Text copied to clipboard');
    showTooltip();
  };

  const onClipboardError = () => {
    setTooltipText('Text not copied to clipboard');
    showTooltip();
  };

  return (
    <>
      <div className={styles.clipboardButtonContainer} ref={toggleRef} >
        <ClipboardButton
          {...rest}
          className={styles.clipboardButton}
          onClipboardCopy={onClipboardCopy}
          onClipboardError={onClipboardError}
          getText={copyToClipboard}
          data-testid="clipboard-button"
          icon="copy"/>
      </div>
      <div
        ref={popperRef}
        style={popperStyles.popper}
        className={styles.tooltip}
        {...popperAttributes.popper}
        data-testid="tooltip-container"
      >
        {visible ? (
          <div
            className={styles.tooltipText}
            style={popperStyles.offset}
            data-testid="tooltip"
          >
            {tooltipText}
          </div>
        ) : null}
      </div>
    </>
  );
};
