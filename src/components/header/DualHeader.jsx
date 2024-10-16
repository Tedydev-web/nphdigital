import Header3 from './Header3';
import Header2 from './Header2';

const DualHeader = ({ navData }) => {
	return (
		<>
			<div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
				<Header2 navData={navData} />
			</div>
			<div style={{ position: 'fixed', top: '80px', left: 0, right: 0, zIndex: 999 }}>
				<Header3 navData={navData} />
			</div>
		</>
	);
};

export default DualHeader;
