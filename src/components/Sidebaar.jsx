import { NavLink } from "react-router-dom";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import menuItem from '../data/menuItem';

const Sidebaar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handalLogOut = () => {
        localStorage.removeItem("isAuthenticated");
        window.location.reload();
    }
    const inputAnimation = {
      hidden: {
        width: 0,
        padding: 0,
        transition: {
          duration: 0.2,
        },
      },
      show: {
        width: "140px",
        padding: "5px 15px",
        transition: {
          duration: 0.2,
        },
      },
    };
  
    const showAnimation = {
      hidden: {
        width: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
      show: {
        opacity: 1,
        width: "auto",
        transition: {
          duration: 0.5,
        },
      },
    };

    const menuAnimation = {
        hidden: {
          opacity: 0,
          height: 0,
          padding: 0,
          transition: { duration: 0.3, when: "afterChildren" },
        },
        show: {
          opacity: 1,
          height: "auto",
          transition: {
            duration: 0.3,
            when: "beforeChildren",
          },
        },
    };
  
    return (
      <>
        <div className="main-container">
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",
  
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    DoSomeCoding
                  </motion.h1>
                )}
              </AnimatePresence>
  
              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
            </div>
            <div className="search">
              <div className="search_icon">
                <BiSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                    type="text"
                    placeholder="Search"
                  />
                )}
              </AnimatePresence>
            </div>
            <section className="routes">
              {menuItem.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }
  
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
            <button 
              onClick={() => handalLogOut()} 
              className="absolute bottom-4 left-4 flex items-center"
            >{
                isOpen && <h3 className="menu_container text-white mr-2">LogOut</h3>
             }
                <FaSignOutAlt className="text-white cursor-pointer" />
            </button>

          </motion.div>
  
          {/* <main>{children}</main> */}

        </div>
      </>
    );
  };

  export default Sidebaar;