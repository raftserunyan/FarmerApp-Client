import React from 'react';

import { Table } from 'components';
import { Layout } from 'components/Layout';
import * as S from './ExpensesPage.styles';
import { ExpensesForm } from './components/ExpensesForm';
import { tableColumns } from 'constants/tableColumns';
import { FiltersList } from './components/FiltersList';

export const ExpensesPage = ({
	expenses,
	loadExpenses,
	deleteExpense,
}) => {

	return (
		<Layout>
			<S.ExpensesPageContainer>
				<Table
					title={[`Գումարային - ${expenses.totalExpensesAmount ?? 0
						}`, `Ըստ Ֆիլտերի - ${expenses.totalFilteredAmount ?? 0
						}`, `Գումարային տարեկան - ${expenses.currentYearExpensesAmount ?? 0
						}`, `Ըստ ֆիլտերի տարեկան - ${expenses.currentYearFilteredAmount ?? 0
						}`]}
					// title={`Ծախսեր - ${expenses.totalExpensesAmount ?? 0
					// 	} (գումարային)`}
					data={expenses.list}
					total={expenses.total}
					loadData={loadExpenses}
					onDelete={deleteExpense}
					FormComponent={ExpensesForm}
					FilterComponent={FiltersList}
					columns={tableColumns.expense}
				/>
			</S.ExpensesPageContainer>
		</Layout>
	);
};
