import React from "react";

const DEFULT_FILTER = "title";

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      filterBy: DEFULT_FILTER,
    };
  }

  async onSearchTextChanged(e) {
    await this.setState({
      searchText: e.target.value,
    });

    if ("onChange" in this.props) {
      this.props.onChange(this.state.searchText, this.state.filterBy);
    }
  }

  onFilterSelected(e) {
    this.setState({
      filterBy: e.target.value,
    });
  }

  async onResetForm(e) {
    e.preventDefault();
    await this.setState({
      searchText: "",
      filterBy: DEFULT_FILTER,
    });

    if ("onChange" in this.props) {
      this.props.onChange(this.state.searchText, this.state.filterBy);
    }
  }

  render() {
    return (
      <div className="row ms-5 mt-3">
        <form onSubmit={this.onResetForm.bind(this)}>
          <div className="col-lg-7 col-md-10">
            <div className=" d-flex">
              <div className="me-2 flex-grow-1">
                <input
                  value={this.state.searchText}
                  onChange={this.onSearchTextChanged.bind(this)}
                  className="form-control"
                  type="text"
                  placeholder="Search ..."
                />
              </div>

              <div className="me-2 flex-grow-2">
                <select
                  className="form-select"
                  onChange={this.onFilterSelected.bind(this)}
                  value={this.state.filterBy}
                >
                  <option value="title">By Title</option>
                  <option value="desc">By Description</option>
                  <option value="titleAndDesc">By Title/Desc</option>
                </select>
              </div>

              <div className="flex-grow-2">
                <button className="btn btn-secondary">Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchFilter;
