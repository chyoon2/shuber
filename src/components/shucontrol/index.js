import React from "react";
import ShuAdd from "../ShuAdd"
import ShuList from "../ShuList";
// import ShuDetail from "./ShuDetail";
// import EditShuForm from "./EditShuForm";
import {Button, Container} from "react-bootstrap";
import PropTypes from "prop-types";
// import Header from "./Header";
// import Container from "react-bootstrap/Container";
// import SearchList from './SearchList';
import {withAuthorization} from '../Session';


class ShuControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedShu: null,
      editing: false,
      search: null,
    };
  }

//   componentDidMount() {
//     const auth = this.props.firebase.auth();
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user });
//       }
//     });
//   }

  handleClick = () => {
    if (this.state.selectedShu != null) {
      this.setState({
        selectedShu: null,
        editing: false,
        search: null,
      });
    } else if (this.state.search != null) {
        this.setState({
          selectedShu: null,
          editing: false,
          search: null,
        });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddShuToList = () => {
    this.setState({
      formVisibleOnPage: false,
    });
  };
  
  // handleChangingSelectedShu = (id) => {
  //   this.props.firestore
  //     .get({ collection: "ShuList", doc: id })
  //     .then((shu) => {
  //       const firestoreShu = {
  //         title: shu.get("title"),
  //         date: shu.get("date"),
  //         description: shu.get("desciption"),
  //         timeOpen: shu.get("timeOpen"),
  //         place: shu.get("place"),
  //         vibe: shu.get("vibe"),
  //         scents: shu.get("scents"),
  //         keywords: shu.get("keywords"),
  //         id: id,
  //       };
  //       this.setState({ search: null, selectedShu: firestoreShu });
  //     });
  // };

  // handleEditClick = () => {
  //   this.setState({ editing: true });
  // };

  // handleEditingShuInList = () => {
  //   this.setState({
  //     editing: false,
  //     selectedShu: null,
  //   });
  // };

  // handleDeleteShu = (id) => {
  //   this.props.firestore.delete({ collection: "memories", doc: id });
  //   this.setState({ selectedShu: null });
  // };

  // handleSearchQuery = (searchObject) => {
  //   this.setState({ search: searchObject})
  // }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    // const auth = this.props.firebase.auth();

    // if (!isLoaded(auth)) {
    //   return (
    //     <React.Fragment>
    //       <h1>Loading ... </h1>
    //     </React.Fragment>
    //   );
    // }
    // if (isLoaded(auth) && auth.currentUser == null) {
    //   return (
    //     <React.Fragment>
    //       <Header className="header" />
    //       <Container className="container">
    //         <h1> You must be signed in to access the memories.</h1>
    //       </Container>
    //     </React.Fragment>
    //   );
    // }
    // if (isLoaded(auth) && auth.currentUser != null) {
      // if (this.state.editing) {
      //   currentlyVisibleState = (
      //     <EditShuForm
      //       shu={this.state.selectedShu}
      //       onEditShu={this.handleEditingShuInList}
      //     />
      //   );
      //   buttonText = "Return to Shu List";
      // } else if (this.state.search != null) {
      //   currentlyVisibleState = (
      //     <SearchList onSearchQuery={this.state.search}
      //     onShuSelection={this.handleChangingSelectedShu} />
      //   );
      //   buttonText = "Return to Shu List";
      // } else if (this.state.selectedShu != null) {
      //   currentlyVisibleState = (
      //     <ShuDetail
      //       shu={this.state.selectedShu}
      //       onClickingDelete={this.handleDeleteShu}
      //       onClickingEdit={this.handleEditClick}
      //     />
      //   );
      //   buttonText = "Return to Shu List";
      // } else 
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = (
          <ShuAdd onNewShuCreation={this.handleAddShuToList} />
          
        );
        buttonText = "Return to Shu List";
      } else {
        currentlyVisibleState = (
          <ShuList onShuSelection={this.handleChangingSelectedShu} />
        );
        buttonText = "Add Shu";
      }
      return (
        <React.Fragment>
          {/* <Header className="header" onSearchQuery={this.handleSearchQuery} /> */}
          <Container>
          {currentlyVisibleState}
          <Button variant="primary" onClick={this.handleClick}>
          {buttonText}</Button>
          </Container>
        </React.Fragment>
      );
    // }
  }
}

ShuControl.propTypes = {
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedShu: PropTypes.object,
};


const condition = authUser => !!authUser;

export default withAuthorization(condition)(ShuControl);