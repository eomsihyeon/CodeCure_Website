import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Announce from './announce';
import Board from './board';
import QnA from './QnA';
import Login from './login';
import SignUp from './signup';
import FindPW from './findPW';
import Introduce from './introduce';
import Newpost from './newpost';
import Notfound from './notfound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/introduce" element={<Introduce />}></Route>
				<Route path="/announce" element={<Announce />}></Route>
				<Route path="/board" element={<Board />}></Route>
				<Route path="/QnA" element={<QnA />}></Route>
				<Route path="/newpost" element={<Newpost />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/finPW" element={<FindPW />}></Route>
				<Route path="/finPW" element={<FindPW />}></Route>
				<Route path="/*" element={<Notfound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;