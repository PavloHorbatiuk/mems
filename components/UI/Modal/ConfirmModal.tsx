import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@/assets/icons/delete.svg";
import { ModalState } from "@/components/Categories/Categories";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  background: "#272934",
  p: 4,
};

interface IProps {
  title?: string;
  bodyText?: string;
  isOpen: boolean;
  setModalState: (value: ModalState) => void;
  setConfirm: (value: boolean) => void;
}

export default function ModalComponent(props: IProps) {
  const { bodyText, isOpen, setModalState, title, setConfirm } = props;
  const handleClose = () => setModalState({ isOpen: false, confirm: false });
  const handleConfirm = () => setConfirm(true);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {bodyText}
          </Typography>
          <div className="flex flex-col pt-5 space-y-4">
            <button onClick={handleConfirm} className="btn-grad">
              <div className="flex justify-center">
                <DeleteIcon />
                Delete
              </div>
            </button>
            <button onClick={handleClose} className="text-red ">
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
