import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from '@/components/ui/badge';
import { usePlanAccess } from '@/hooks/use-plan-access';
import { api } from '@/convex/_generated/api';
import { useConvexMutation, useConvexQuery } from '@/hooks/use-convex-query';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from '@/components/ui/button';

const NewProjectModal = ({ isOpen, onClose }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleClose = () => {
        onClose();
    }

    const { isFree, canCreateProject } = usePlanAccess();
    const { data: projects } = useConvexQuery(api.projects.getUserProjects);
    const { mutate: createProject } = useConvexMutation(api.projects.create);

    const currentProjectCount = projects?.length || 0
    const canCreate = canCreateProject(currentProjectCount)
    
    const handleCreateProject = () => {};



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
                                {currentProjectCount}/3 projects
                            </Badge>
                        )}


                    </DialogHeader>


                    {isFree && currentProjectCount >= 2 && (


                        <div className='space-y-6'>
                            <Alert className="bg-amber-500/10 border-amber-500/20" >
                                <Crown className="h-5 w-5 text-amber-400" />

                                <AlertDescription className="text-amber-300/80">
                                    <div className='font-semibold text-amber-400 mb-1'>
                                        {currentProjectCount === 2
                                            ? "last Free Project"
                                            : "Projwct limit reached"
                                        }

                                        {currentProjectCount === 2
                                            ? "This will be your last free Project. Upgrade to Pexel Pro for unlimited projects."
                                            : "Free plan is limited to 3 projects. upgrade to Pexel Pro to create more projects."
                                        }

                                        {/* Upload Area */}

                                    </div>
                                </AlertDescription>
                            </Alert>
                        </div>

                    )}


                    <DialogFooter>
                        <Button
                            variant="ghost"
                            onClick={handleClose}
                            disabled={isUploading}
                            className="text-white/70 hover:text-white">
                            Cancel
                        </Button>

                        <Button
                            onClick={handleCreateProject}
                            disabled={!selectedFile || !projectTitle.trim() || isUploading}
                            variant="primary">

                                {isUploading  ? (
                                    <>
                                    <Loader2 className =" h-4 w-4 animate-spin  "/>
                                    Creating...
                                    </>
                                ) : (
                                    "Create Project"
                                )

                                }

                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewProjectModal
