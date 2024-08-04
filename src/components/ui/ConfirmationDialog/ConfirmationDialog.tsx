import { Button } from "../Button";
import { Model } from "../Model";
import { Typography } from "../Typography";

interface ConfirmationDialogProps {
  title?: string;
  body?: string;
  model?: boolean;
  open?: boolean;
  onOpenChange?: () => void;
  handleConfirm: () => void;
  handleCancel: () => void;
}

const ConfirmationDialog = ({
  title,
  body,
  model,
  open,
  onOpenChange,
  handleCancel,
  handleConfirm,
}: ConfirmationDialogProps) => (
  <Model modal={model} open={open} onOpenChange={onOpenChange}>
    <Model.Content className="!top-[30%]" role="alertdialog">
      <Model.Header>
        <Model.Title asChild>
          <Typography
            asElement="h3"
            role="heading"
            className="!text-lg !font-semibold"
          >
            {title ?? "Delete Item"}
          </Typography>
        </Model.Title>
      </Model.Header>
      <Model.Description asChild>
        <Typography asElement="p" className="!text-sm !mt-4">
          {body ?? "Are you sure you want to delete this item?"}
        </Typography>
      </Model.Description>

      <Model.Footer className="!mt-6">
        <Model.Close asChild>
          <Button
            variant={"destructive"}
            onClick={handleConfirm}
            className="!px-4"
          >
            Delete
          </Button>
        </Model.Close>
        <Model.Close asChild>
          <Button variant="outline" onClick={handleCancel} className="px-4">
            Cancel
          </Button>
        </Model.Close>
      </Model.Footer>
    </Model.Content>
  </Model>
);
export { ConfirmationDialog };
