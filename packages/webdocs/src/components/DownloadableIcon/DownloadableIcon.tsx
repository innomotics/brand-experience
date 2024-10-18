import { InnoIcon, InnoSelect, InnoSelectItem, InnoInput } from '@innomotics/brand-experience-react-lib';
import React from 'react';
import JSZip from "jszip";

export default function DownloadableIcon({ iconnames }): JSX.Element {
    const [color, setColor] = React.useState(
        'white'
    );

    const [filteredlist, filter] = React.useState([...iconnames]);

    const icons: React.JSX.Element[] = [];

    function filterlist(value){
        if(value.detail !== ''){
            filter(iconnames.filter(c=> c.includes(value.detail)));
            
        }
        else{
            filter([...iconnames]);
        }
    }

    filteredlist.forEach(name => {
        const url = `/brand-experience/svg/${color}/${name}.svg`;
        const item = (
            <div className="icon-item"><InnoIcon icon={name} size={64}></InnoIcon><div>{name}</div><div><a download href={url}>Download</a></div></div>
        );
        icons.push(item);
    });

    return (
        <div className="icon-table-wrapper">
            <div className="options">
                <InnoSelect label='Select download color' value={color} onValueChanged={value => { setColor(value.detail); }}>
                    <InnoSelectItem value='white' label='white'></InnoSelectItem>
                    <InnoSelectItem value='grey' label='grey'></InnoSelectItem>
                    <InnoSelectItem id='lime' value='lime' label='lime'></InnoSelectItem>
                </InnoSelect>
                <InnoInput label="Search" variant="light" onValueChanged={(value) => filterlist(value)}>
                <input type="string" />
                </InnoInput> 
            </div>
            <div className="icons">
                {icons}
            </div>
        </div>
    );
}
