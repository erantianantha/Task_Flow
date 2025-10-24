import apiClient from './axiosConfig';
import {
	setLoading,
	successCreatingList,
	successDeletingList,
	successFetchingLists,
	updateListTitle,
} from '../Redux/Slices/listSlice';
import { openAlert } from '../Redux/Slices/alertSlice';
import { addMembers, setActivityLoading, updateActivity, updateBackground, updateDescription } from '../Redux/Slices/boardSlice';

export const getLists = async (boardId, dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await apiClient.get(`/list/${boardId}`);
		dispatch(successFetchingLists(res.data));
		setTimeout(() => {
			dispatch(setLoading(false));
		}, 300);
	} catch (error) {
		dispatch(setLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const activityUpdate = async (boardId, dispatch) => {
	dispatch(setActivityLoading(true));
	try {
		const res = await apiClient.get(`/board/${boardId}/activity`);
		dispatch(updateActivity(res.data));
		dispatch(setActivityLoading(false));
	} catch (error) {
		dispatch(setActivityLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const createList = async (title, boardId, dispatch) => {
	dispatch(setLoading(true));
	try {
		const res = await apiClient.post('/list/create', { title: title, boardId: boardId });
		dispatch(successCreatingList(res.data));
		dispatch(setLoading(false));
	} catch (error) {
		dispatch(setLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const DeleteList = async (listId, boardId, dispatch) => {
	dispatch(setLoading(true));
	try {
		await apiClient.delete(`/list/${boardId}/${listId}`);
		await dispatch(successDeletingList(listId));
		dispatch(setLoading(false));
	} catch (error) {
		dispatch(setLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const listTitleUpdate = async (listId, boardId, title, dispatch) => {
	try {
		await dispatch(updateListTitle({ listId: listId, title: title }));
		await apiClient.put(`/list/${boardId}/${listId}/update-title`, { title: title });
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const boardDescriptionUpdate = async (boardId, description, dispatch) => {
	try {
		await dispatch(updateDescription(description));
		await apiClient.put(`/board/${boardId}/update-board-description`,{
			description
		});
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const boardBackgroundUpdate = async (boardId, background, isImage, dispatch) => {
	try {
		await dispatch(updateBackground({background,isImage}));
		await apiClient.put(`/board/${boardId}/update-background`,{
			background,
			isImage,
		});
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const boardMemberAdd = async (boardId, members, dispatch) => {
	try {
		const result = await apiClient.post(`/board/${boardId}/add-member`,{
			members
		});
		await dispatch(addMembers(result.data));
		dispatch(
			openAlert({
				message: 'Members are added to this board successfully',
				severity: 'success',
			})
		);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};
