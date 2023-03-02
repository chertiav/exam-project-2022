import {
	BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//====================================================
import browserHistory from './browserHistory';
import { controller } from './api/ws/socketController';
import * as Pages from './pages';
import * as CustomRoute from './routes'
import * as CONSTANTS from './constants';
import * as Components from './components';
import * as utils from './utils';

const App = () => {

	const { userStore: { data } } = useSelector(state => state);
	const auth = utils.function.useAuth();

	return (
		<Router history={browserHistory}>
			<ToastContainer
				position="top-center" autoClose={5000}
				hideProgressBar newestOnTop={false}
				closeOnClick rtl={false} pauseOnVisibilityChange
				draggable pauseOnHover
			/>
			<Routes>
				<Route path='/' element={<Pages.Layout />}>
					<Route index element={<Pages.Home />} />
					<Route path='/not-found' element={<Pages.NotFound />} />
					<Route path='/how-it-works' element={<Pages.HowItWorks />} />
					<Route element={<CustomRoute.OnlyNotAuthorizedUserRoute />}>
						<Route path='/login' element={<Pages.Login />} />
						<Route path='/registration' element={<Pages.Registration />} />
					</Route>
					<Route element={<CustomRoute.ProtectedRoute />}>
						<Route path='/account' element={<Pages.UserProfile />} />
						<Route path='/dashboard' element={<Pages.Dashboard />} />
						<Route path='/events' element={<Pages.Events />} />
						<Route path='/button-group' element={<Pages.ButtonGroup />} />
						{data?.role !== 'moderator' &&
							<>
								<Route path='/contest/:id' element={<Pages.Contest />} />
								<Route path="/payment" element={<Pages.Payment />} />
								<Route path='/startContest' >
									<Route index element={<Pages.StartContest />} />
									<Route path='nameContest' element={
										<Pages.ContestCreation
											title={'Company Name'}
											contestType={CONSTANTS.APP_CONSTANTS.NAME_CONTEST}
										/>} />
									<Route path='taglineContest' element={
										<Pages.ContestCreation
											title={'TAGLINE'}
											contestType={CONSTANTS.APP_CONSTANTS.TAGLINE_CONTEST}
										/>} />
									<Route path='logoContest' element={
										<Pages.ContestCreation
											title={'LOGO'}
											contestType={CONSTANTS.APP_CONSTANTS.LOGO_CONTEST}
										/>} />
								</Route>
							</>
						}
					</Route>
					<Route path="*" element={<Navigate to="/" replace={true} />} />
				</Route>
			</Routes>
			{auth
				? <Components.ChatContainer />
				: data?.id
					? controller.unsubscribe(data.id)
					: null
			}
		</Router >
	);
};

export default App;
