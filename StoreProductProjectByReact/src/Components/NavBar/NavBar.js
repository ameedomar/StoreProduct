import React from "react";
import { navStruct } from "./utils";

//Before refactoring
// class NavBar extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             activeTap: [true, false, false, false]
//         }
//     }

//     onTabClicked(tabIdx) {
//         let _activeTap = [...this.state.activeTap]
//         _activeTap = _activeTap.map((tab, idx) => {
//             if (idx === tabIdx) {
//                 return true
//             }
//             return false
//         })

//         this.setState({
//             activeTap: _activeTap
//         })

//     }

//     render() {
//         return (
//             <div className="navbar navbar-expand-md bg-primary navbar-dark ps-5">
//                 <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#mainNavBar">
//                     <span className='navbar-toggler-icon' />
//                 </button>

//                 <div className="collapse navbar-collapse" id="mainNavBar">
//                     <ul className="navbar-nav">
//                         <li className="nav-item ms-4">
//                             <button
//                                 className={`btn nav-link ${this.state.activeTap[0] ? "active" : ""}`}
//                                 onClick={this.onTabClicked.bind(this, 0)}
//                             >
//                                 Products
//                             </button>
//                         </li>
//                         <li className="nav-item ms-4">
//                             <button
//                                 className={`btn nav-link ${this.state.activeTap[1] ? "active" : ""}`}
//                                 onClick={this.onTabClicked.bind(this, 1)}
//                             >
//                                 Cateogry
//                             </button>
//                         </li>
//                         <li className="nav-item ms-4">
//                             <button
//                                 className={`btn nav-link ${this.state.activeTap[2] ? "active" : ""}`}
//                                 onClick={this.onTabClicked.bind(this, 2)}
//                             >
//                                 Login
//                             </button>
//                         </li>
//                         <li className="nav-item ms-4">
//                             <button
//                                 className={`btn nav-link ${this.state.activeTap[3] ? "active" : ""}`}
//                                 onClick={this.onTabClicked.bind(this, 3)}
//                             >
//                                 Cart
//                             </button>
//                         </li>
//                     </ul>

//                 </div>

//             </div>
//         )
//     }
// }

//After Refactoring
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // activeTap: [true, false, false, false]
      navStructState: navStruct,
    };
  }

  onTabClicked(tabIdx) {
    let _navStructState = JSON.parse(JSON.stringify(this.state.navStructState));
    _navStructState = _navStructState.map((tab, idx) => {
      // if (idx === tabIdx) {
      //     tab.isActive = true;
      // } else {
      //     tab.isActive = false
      // }
      tab.isActive = idx === tabIdx;
      return tab;

      // tab.isActive = (idx === tabIdx)
    });

    this.setState({
      navStructState: _navStructState,
    });
  }

  render() {
    const navStructState = this.state.navStructState;
    return (
      <div className="navbar navbar-expand-md bg-primary navbar-dark ps-5">
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavBar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavBar">
          <ul className="navbar-nav">
            {navStructState.map((tab, idx) => {
              return (
                <li className="nav-item" key={idx}>
                  <button
                    className={`btn nav-link ${tab.cssClass} ${
                      tab.isActive ? "active" : ""
                    }`}
                    onClick={this.onTabClicked.bind(this, idx)}
                  >
                    {tab.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
