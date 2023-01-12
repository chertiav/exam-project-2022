import { useSelector } from "react-redux";
//======================================
import styles from './Home.module.sass';
import * as Components from '../../components';

export const Home = () => {

	const { userStore: { isFetching } } = useSelector(state => state);

	return (
		<>
			{isFetching ? <Components.UI.SpinnerLoader /> : (
				<div className={styles.container}>
					<Components.HeaderHome />
					<Components.InfoImage />
					<Components.InfoCard />
					<Components.InfoSponsorsStatistics />
					<Components.InfoContestSteps />
					<Components.InfoForSale />
					<Components.DashboardButton />
					<Components.InfoCustomers />
				</div>
			)}
		</>
	)
};
