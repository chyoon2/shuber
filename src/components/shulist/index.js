import React from "react";
import PropTypes from "prop-types";
import { Shu } from "../Shu";

function ShuList(props) {
  const test = "shoelist";
  console.log(test);
  return null;
  // const { onSearchQuery } = props;

  // if (onSearchQuery == null){
  // 	onSearchQuery.forEach(doc => {
  // 		console.log(doc.data());
  // });
  // }

  // if (onSearchQuery != null){
  // 	let output = onSearchQuery.forEach(doc => {console.log(doc.data())});
  // 	// (doc.id, '=>', doc.data());

  // }

  // useFirestoreConnect([{ collection: 'memories' }]);

  // const memories = useSelector((state) => state.firestore.ordered.memories);

  // console.log(memories)
  // if (isLoaded(memories)) {
  // 	return (
  // 		<React.Fragment>
  // 			<h1 style={{textAlign: 'center'}}>Shu Lane</h1>
  // 			<hr />
  // 				{memories.map((shu) => {
  // 					return (

  // 						<Shu
  // 							whenShuClicked={props.onShuSelection}
  // 							title={shu.title}
  // 							date={shu.date}
  // 							description={shu.description}
  // 							timeOpen={shu.timeOpen}
  // 							place={shu.place}
  // 							vibe={shu.vibe}
  // 							scents={shu.scents}
  // 							keywords={shu.keywords}
  // 							id={shu.id}
  // 							key={shu.id}
  // 						/>
  // 					);
  // 				})}
  // 		</React.Fragment>
  // 	);
  // } else {
  // 	return (
  // 		<React.Fragment>
  // 			<h3>Loading...</h3>
  // 		</React.Fragment>
  // 	);
  // }
}

ShuList.propTypes = {
  onShuSelection: PropTypes.func,
  onSearchQuery: PropTypes.object,
};

export default ShuList;
