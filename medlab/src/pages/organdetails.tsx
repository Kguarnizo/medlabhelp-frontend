
import React from 'react';
import OrganList, {OrganListProps} from '../components/OrganList';


const OrganDetails: React.FC<OrganListProps> = ({ organData, onOrganClick }) => {
    return(
        <div className="organdetails">
            <h2>This is the OrganDetails page</h2>
            {/* <div>
                <OrganList organData={organData} onOrganClick={handleOrganClick}/>
            </div> */}
        </div>
    )
}

export default OrganDetails;