import { toast } from 'react-toastify';

import { HttpService } from 'services';
import { CREDITS_TYPES } from 'redux/types/credits';

export const loadCredits = search => async dispatch => {
	try {
		const res = await HttpService.post(
			'credits/Get',
			search
		);

		dispatch({
			type: CREDITS_TYPES.LOAD_CREDITS,
			list: res.results,
			total: res.total,
		});
	} catch (ex) {
		toast.error('Առաջացավ խնդիր');
	}
};
