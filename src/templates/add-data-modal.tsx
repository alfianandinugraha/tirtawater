import Modal from "@/components/modal";
import TextField from "@/components/text-field";
import useDataset from "@/store/use-dataset";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";

type AddDataModalProps = {
  open: boolean;
  onClose: () => void;
};

const AddDataModal = (props: AddDataModalProps) => {
  const pushData = useDataset((store) => store.push);
  const { control, handleSubmit, getValues } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      temprature: "",
      turbidity: "",
      solid: "",
      distance: "",
      terrain: "",
      debit: "",
    },
  });

  const submit = () => {
    const body = getValues();
    pushData({
      name: body.name,
      temprature: +body.temprature,
      turbidity: +body.turbidity,
      solid: +body.solid,
      distance: +body.distance,
      terrain: +body.terrain,
      debit: +body.debit,
    });
    props.onClose();
  };

  const close = () => {
    props.onClose();
  };

  return (
    <Modal
      title="Add Data"
      open={props.open}
      onClose={close}
      buttons={
        <>
          <Button onClick={close}>Close</Button>
          <Button
            colorScheme="blue"
            leftIcon={<BsPlusLg />}
            onClick={handleSubmit(submit)}
          >
            Add
          </Button>
        </>
      }
    >
      <VStack as="form" spacing="4" alignItems="unset">
        <TextField
          control={control}
          name="name"
          label="name"
          rules={{ required: true }}
        />
        <HStack spacing="4">
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="temprature"
              label="temprature"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="turbidity"
              label="turbidity"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="solid"
              label="solid"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="distance"
              label="distance"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="terrain"
              label="terrain"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="debit"
              label="debit"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default AddDataModal;
