import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import Login from "./Pages/Auth/login";
import SignUp from "./Pages/Auth/signup";
import MySnackbar from "./Components/MySnackbar";
import Workspace from "./Pages/Workspace";
import { useSelector } from "react-redux";
import Project from "./Pages/Workspace/Project";
import EnDeveloppement from "./Components/EnDeveloppement";
import T1 from "./Pages/Workspace/Project/tables/t1";
import T2 from "./Pages/Workspace/Project/tables/t2";
import T4 from "./Pages/Workspace/Project/tables/t4";
import T3 from "./Pages/Workspace/Project/tables/t3";
import T5 from "./Pages/Workspace/Project/tables/t5";
import T6 from "./Pages/Workspace/Project/tables/t6";

import T8 from "./Pages/Workspace/Project/tables/t8";
import T7 from "./Pages/Workspace/Project/tables/t7";
import T9 from "./Pages/Workspace/Project/tables/t9";
import T10 from "./Pages/Workspace/Project/tables/t10";
import T11 from "./Pages/Workspace/Project/tables/t11";
import T12 from "./Pages/Workspace/Project/tables/t12";
import T13 from "./Pages/Workspace/Project/tables/t13";
import T14 from "./Pages/Workspace/Project/tables/t14";
import MySnackbarLaoding from "./Components/MySnackbarLoading";
import T15 from "./Pages/Workspace/Project/tables/t15";
import T2_1 from "./Pages/Workspace/Project/tables/tv2/t2_1";
import T2_2 from "./Pages/Workspace/Project/tables/tv2/t2_2";
import T2_3 from "./Pages/Workspace/Project/tables/tv2/t2_3";
import T2_4 from "./Pages/Workspace/Project/tables/tv2/t2_4";
import T2_5 from "./Pages/Workspace/Project/tables/tv2/t2_5";
import T2_6 from "./Pages/Workspace/Project/tables/tv2/t2_6";
import T2_7 from "./Pages/Workspace/Project/tables/tv2/t2_7";
import T2_8 from "./Pages/Workspace/Project/tables/tv2/t2_8";
import T2_9 from "./Pages/Workspace/Project/tables/tv2/t2_9";
import T2_10 from "./Pages/Workspace/Project/tables/tv2/t2_10";
import T2_11 from "./Pages/Workspace/Project/tables/tv2/t2_11";
import T2_12 from "./Pages/Workspace/Project/tables/tv2/t2_12";
import T2_13 from "./Pages/Workspace/Project/tables/tv2/t2_13";
import T2_14 from "./Pages/Workspace/Project/tables/tv2/t2_14";
import T2_15 from "./Pages/Workspace/Project/tables/tv2/t2_15";
import T2_17 from "./Pages/Workspace/Project/tables/tv2/t2_17";
import T2_16 from "./Pages/Workspace/Project/tables/tv2/t2_16";
import T2_18 from "./Pages/Workspace/Project/tables/tv2/t2_18";
import T2_19 from "./Pages/Workspace/Project/tables/tv2/t2_19";
import T2_20 from "./Pages/Workspace/Project/tables/tv2/t2_20";
import T2_21 from "./Pages/Workspace/Project/tables/tv2/t2_21";
import T2_22 from "./Pages/Workspace/Project/tables/tv2/t2_22";
import T16 from "./Pages/Workspace/Project/tables/t16";
import T17 from "./Pages/Workspace/Project/tables/t17";
import T101 from "./Pages/Workspace/Project/tables/annexe 2/t101";
import T103 from "./Pages/Workspace/Project/tables/annexe 2/t103";
import T105 from "./Pages/Workspace/Project/tables/annexe 2/t105";
import T102 from "./Pages/Workspace/Project/tables/annexe 2/t102";
import T104 from "./Pages/Workspace/Project/tables/annexe 2/t104";
import T106 from "./Pages/Workspace/Project/tables/annexe 2/t106";
import T107 from "./Pages/Workspace/Project/tables/annexe 2/t107";
import T108 from "./Pages/Workspace/Project/tables/annexe 2/t108";
import T109 from './Pages/Workspace/Project/tables/annexe 2/t109';
import T110 from "./Pages/Workspace/Project/tables/annexe 2/t110";
import T111 from "./Pages/Workspace/Project/tables/annexe 2/t111";
import T112 from "./Pages/Workspace/Project/tables/annexe 2/t112";
import T113 from "./Pages/Workspace/Project/tables/annexe 2/t113";
import T114 from "./Pages/Workspace/Project/tables/annexe 2/t114";
import T115 from "./Pages/Workspace/Project/tables/annexe 2/t115";
import T116 from "./Pages/Workspace/Project/tables/annexe 2/t116";
import T117 from "./Pages/Workspace/Project/tables/annexe 2/t117";
import T118 from "./Pages/Workspace/Project/tables/annexe 2/t118";
import T119 from "./Pages/Workspace/Project/tables/annexe 2/t119";
import T120 from "./Pages/Workspace/Project/tables/annexe 2/t120";
import T121 from "./Pages/Workspace/Project/tables/annexe 2/t121";
import Test from "./Pages/Workspace/Project/tables/annexe 2/test";
import { useEffect } from 'react';
import { persistor } from "./redux/store";
import T122 from "./Pages/Workspace/Project/tables/annexe 2/t122";
import T123 from "./Pages/Workspace/Project/tables/annexe 2/t123";
import T124 from "./Pages/Workspace/Project/tables/annexe 2/t124";
function App() {
  const user_id = useSelector((state) => state.user.id);
  const config = useSelector((state) => state.config.aS1);
  useEffect(() => {
    if ((config && config.type_1 && config.type_2 && config.type_3)) {
      console.log('clear persistor')
      persistor.pause();
      persistor.flush().then(() => {
        return persistor.purge();
      });
    }

  }, []);
  return (
    <>
      <MySnackbar />
      <MySnackbarLaoding />

      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Navigate to={"/auth"} />} />
        <Route
          path="/auth"
          element={user_id ? <Navigate to={"/workspace"} /> : <Auth />}
        >
          <Route index element={<Navigate to={"login"} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route
          path="/workspace"
          element={user_id ? <Workspace /> : <Navigate to={"/auth"} />}
        />
        <Route path="/project/:id" element={<Project />}>
          <Route index element={<Navigate to={"1"} />} />
          <Route path="1" element={<T1 />} />
          <Route path="2" element={<T2 />} />
          <Route path="3" element={<T3 />} />
          <Route path="4" element={<T4 />} />
          <Route path="5" element={<T5 />} />
          <Route path="6" element={<T6 />} />
          <Route path="7" element={<T7 />} />
          <Route path="8" element={<T8 />} />
          <Route path="9" element={<T9 />} />
          <Route path="10" element={<T10 />} />
          <Route path="11" element={<T11 />} />
          <Route path="12" element={<T12 />} />
          <Route path="13" element={<T13 />} />
          <Route path="14" element={<T14 />} />
          <Route path="15" element={<T15 />} />
          <Route path="16" element={<T2_1 />} />
          <Route path="17" element={<T2_2 />} />
          <Route path="18" element={<T2_3 />} />
          <Route path="19" element={<T2_4 />} />
          <Route path="20" element={<T2_5 />} />
          <Route path="21" element={<T2_6 />} />
          <Route path="22" element={<T2_7 />} />
          <Route path="23" element={<T2_8 />} />
          <Route path="24" element={<T2_9 />} />
          <Route path="25" element={<T2_10 />} />
          <Route path="26" element={<T2_11 />} />
          <Route path="27" element={<T2_12 />} />
          <Route path="28" element={<T2_13 />} />
          <Route path="29" element={<T2_14 />} />
          <Route path="30" element={<T2_15 />} />
          <Route path="31" element={<T2_16 />} />
          <Route path="32" element={<T2_17 />} />
          <Route path="33" element={<T2_18 />} />
          <Route path="34" element={<T2_19 />} />
          <Route path="35" element={<T2_20 />} />
          <Route path="36" element={<T2_21 />} />
          <Route path="37" element={<T2_22 />} />
          <Route path="38" element={<T16 />} />
          <Route path="39" element={<T17 />} />
          <Route path="101" element={<T101 />} />
          <Route path="102" element={<T102 />} />
          <Route path="103" element={<T103 />} />
          <Route path="104" element={<T104 />} />
          <Route path="105" element={<T105 />} />
          <Route path="106" element={<T106 />} />
          <Route path="107" element={<T107 />} />
          <Route path="108" element={<T108 />} />
          <Route path="109" element={<T109 />} />
          <Route path="110" element={<T110 />} />
          <Route path="111" element={<T111 />} />
          <Route path="112" element={<T112 />} />

          <Route path="113" element={<T113 />} />
          <Route path="114" element={<T114 />} />
          <Route path="115" element={<T115 />} />
          <Route path="116" element={<T116 />} />
          <Route path="117" element={<T117 />} />
          <Route path="118" element={<T118 />} />
          <Route path="119" element={<T119 />} />
          <Route path="120" element={<T120 />} />
          <Route path="121" element={<T121 />} />
          <Route path="122" element={<T122 />} />
          <Route path="123" element={<T123 />} />
          <Route path="124" element={<T124 />} />


          {/* <Route path="105" element={<T105 />} /> */}
          <Route path="*" element={<EnDeveloppement />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
