import React from 'react';
import { Monster } from '../../App';
import useStore from '../../store/store';



const Detail: React.FC = () => {
  // Implement your component logic here
  const  monsterDetail = useStore((state) => state.activeDetail);

  const renderDetailItem = (label: string, value: string | number) => {
    return (
      <div>
        <span>{label}: </span>
        <span>{value}</span>
      </div>
    );
  };

  return (
    <div>
      {/* Render your component content here */}
      {renderDetailItem('Name', monsterDetail.name)}
      {renderDetailItem('Username', monsterDetail.username)}
      {renderDetailItem('Email', monsterDetail.email)}
      {renderDetailItem('Street', monsterDetail.address.street)}
      {renderDetailItem('Suite', monsterDetail.address.suite)}
      {renderDetailItem('City', monsterDetail.address.city)}
      {renderDetailItem('Zipcode', monsterDetail.address.zipcode)}
      {renderDetailItem('Latitude', monsterDetail.address.geo.lat)}
      {renderDetailItem('Longitude', monsterDetail.address.geo.lng)}
      {renderDetailItem('Phone', monsterDetail.phone)}
      {renderDetailItem('Website', monsterDetail.website)}
      {renderDetailItem('Company', monsterDetail.company.name)}
      {renderDetailItem('Catch Phrase', monsterDetail.company.catchPhrase)}
      {renderDetailItem('BS', monsterDetail.company.bs)}
    </div>
  );
};

export default Detail;
