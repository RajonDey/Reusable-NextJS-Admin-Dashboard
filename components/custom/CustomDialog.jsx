import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from '@/components/ui/dialog';

const CustomDialog = ({
    isOpen,
    header,
    content,
    onClose,
    onConfirm,
    loading,
}) => {
    return (
        <>
            {/* ---------- Reusable Dialog for Delete + Mark/Unmark Featured Actions */}
            <Dialog open={isOpen}>
                <DialogContent className="sm:max-w-[560px]">
                    <DialogHeader className="pb-[30px]">
                        <DialogTitle className="headline-small">
                            {header}
                        </DialogTitle>
                        <DialogDescription className="body-medium mt-[16px]">
                            {content}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <Button
                            type="text"
                            onClick={onClose}
                            className="transparent-btn"
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            onClick={onConfirm}
                            className="main-btn"
                            disabled={loading}
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CustomDialog;
