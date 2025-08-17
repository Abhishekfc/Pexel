import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from '@/components/ui/badge';
import { usePlanAccess } from '@/hooks/use-plan-access';

const NewProjectModal = ({ isOpen, onClose }) => {
    const handleClose = () => {
        onClose();
    }

    const {isFree, currentProjectCount} = usePlanAccess();


    return (
        <>
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-white">
                            Create New Project
                        </DialogTitle>

                        {isFree && (
                            <Badge variant="secondry" className="bg-slate-700 text-white/70" >
                                {currentProjectCount/3} projects
                            </Badge>
                        )}


                    </DialogHeader>

                    <DialogFooter>Footer</DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewProjectModal
