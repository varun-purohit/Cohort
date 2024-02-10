import Assignment1 from "./Components/Assignment1/Assignment1";
import Assignment2 from "./Components/Assignment2/Assignment2";
import Assignment3 from "./Components/Assignment3/Assignment3";
import Assignment4 from "./Components/Assignment4/Assignment4";
import Assignment5 from "./Components/Assignment5/Assignment5";
import Assignment6 from "./Components/Assignment6/Assignment6";
import Assignment7 from "./Components/Assignment7/Assignment7";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/1" element={<Assignment1 />} />
          <Route path="/2" element={<Assignment2 />} />
          <Route path="/3" element={<Assignment3 />} />
          <Route path="/4" element={<Assignment4 />} />
          <Route path="/5" element={<Assignment5 />} />
          <Route path="/6" element={<Assignment6 />} />
          <Route path="/7" element={<Assignment7 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

function LinkBtn({ num, navigate }) {
  return (
    <button onClick={() => navigate("/" + num)} id="link-btn">
      {num}
    </button>
  );
}
function Links() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   document.body.style.backgroundColor = "white";
  // });
  return (
    <div id="links">
      {[1, 2, 3, 4, 5, 6, 7].map((n, i) => (
        <LinkBtn num={n} key={i} navigate={navigate} />
      ))}
    </div>
  );
}
