import { useRecords } from '@puzzlehq/sdk';

export const useMsRecords = (address?: string) => {
  const { records } = useRecords({
    filter: {
      programIds: [
        'whos_looking_for_adam_v001.aleo',
        'adam_in_eden_v001.aleo',
        'multiparty_pvp_utils_v015.aleo',
      ],
      type: 'unspent',
    },
    address,
    multisig: true,
  });
  const msGameRecords = records?.filter(
    (record) => record.programId === 'whos_looking_for_adam_v001.aleo'
  );
  const msPuzzleRecords = records?.filter(
    (record) => record.programId === 'adam_in_eden_v001.aleo'
  );
  const msUtilRecords = records?.filter(
    (record) => record.programId === 'multiparty_pvp_utils_v015.aleo'
  );

  console.log([msGameRecords, msPuzzleRecords, msUtilRecords]);

  return { msPuzzleRecords, msGameRecords, msUtilRecords };
};
