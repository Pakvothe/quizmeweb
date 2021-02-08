import React from 'react';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react';
import strings from '@constants/strings';
import { IState } from '../types/slices';
import { useSelector } from 'react-redux';

interface DialogOverlayProps {
	isOpen: boolean;
	cancelRef: React.MutableRefObject<null>;
	onClose: () => void;
	dispatch: any;
	confirmText: string;
	color: string;
}

const DialogOverlay: React.FC<DialogOverlayProps> = ({
	isOpen,
	cancelRef,
	onClose,
	dispatch,
	confirmText,
	color,
}) => {
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];
	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={onClose}
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
						{s.youSure}
					</AlertDialogHeader>

					<AlertDialogBody>{s.cantUndo}</AlertDialogBody>

					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>
							{s.cancel}
						</Button>
						<Button
							colorScheme={color}
							onClick={() => {
								dispatch();
								onClose();
							}}
							ml={3}
						>
							{confirmText}
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};

export default DialogOverlay;
