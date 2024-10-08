import { FlowValueTypeMap } from '@fastgpt/global/core/workflow/node/constant';
import { Box } from '@chakra-ui/react';
import { WorkflowIOValueTypeEnum } from '@fastgpt/global/core/workflow/constants';
import MyTooltip from '@fastgpt/web/components/common/MyTooltip';
import React from 'react';

const ValueTypeLabel = ({
  valueType,
  valueDesc
}: {
  valueType?: WorkflowIOValueTypeEnum;
  valueDesc?: string;
}) => {
  const valueTypeData = valueType ? FlowValueTypeMap[valueType] : undefined;

  const label = valueTypeData?.label || '';

  return !!label ? (
    <MyTooltip label={valueDesc}>
      <Box
        bg={'myGray.100'}
        color={'myGray.500'}
        border={'base'}
        borderRadius={'sm'}
        ml={2}
        px={1}
        h={6}
        display={'flex'}
        alignItems={'center'}
        fontSize={'11px'}
      >
        {label}
      </Box>
    </MyTooltip>
  ) : null;
};

export default React.memo(ValueTypeLabel);
