import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contest from "./components/pages/Contest";
import Schedule from "./components/pages/Schedule";
import Portfolio from "./components/pages/Portfolio";
import "antd/dist/antd.css";
import { Layout, Menu, Divider, BackTop } from "antd";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const { Header, Content, Footer } = Layout;

  const menuData = [
    { title: "Home", path: "/" },
    { title: "Contest", path: "/contest" },
    { title: "Schedule", path: "/schedule" },
    { title: "Portfolio", path: "/portfolio" },
  ];

  return (
    <>
      <Router>
        <BackTop />
        <Layout
          className="layout"
          style={{ background: "#fff", padding: "0 17vw" }}
        >
          <Header id="header">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                href="/"
                className="logo"
                style={{
                  fontSize: "25px",
                  paddingRight: "30px",
                  color: "#000000d9",
                }}
              >
                GONGDAL
              </a>
              <Divider style={{ height: "20px" }} type="vertical" />
              <SearchBar />
            </div>
            <Menu
              style={{ border: "none" }}
              id="menu"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              {menuData.map((_, index) => {
                const key = index + 1;
                return (
                  <>
                    <Menu.Item key={key}>
                      <Link to={menuData[index].path}>
                        {menuData[index].title}
                      </Link>
                    </Menu.Item>
                  </>
                );
              })}
            </Menu>
          </Header>
          <Content
            className="content"
            style={{ background: "#fff", paddingBottom: "200px" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Content>
          <Footer
            style={{
              paddingBottom: "50px",
              background: "#fff",
              textAlign: "center",
            }}
          >
            GONGDAL ©2018 Created by Nyoung
          </Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
