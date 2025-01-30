import { InnoIcon, InnoSelect, InnoSelectItem, InnoInput, InnoButton } from '@innomotics/brand-experience-react-lib';
import React from 'react';

export default function DownloadableIcon({ iconnames, bicolor }): JSX.Element {
    const [color, setColor] = React.useState(
        bicolor ? 'bicolor' : 'white'
    );
    const bc: boolean = bicolor;
    const [filteredlist, filter] = React.useState([...iconnames]);

    const icons: React.JSX.Element[] = [];

    function filterlist(value) {
        if (value.detail !== '') {
            filter(iconnames.filter(c => c.includes(value.detail)));

        }
        else {
            filter([...iconnames]);
        }
    }

    filteredlist.forEach(name => {

        const url = `/brand-experience/svg/${color}/${name}.svg`;
        let item;
        if (!bc) {
            item = (
                <div key={name} className="icon-item"><InnoIcon icon={name} size={64}></InnoIcon><div>{name}</div><div><a download href={url}>Download</a></div></div>
            );
        }
        else {
            item = (
                <div key={name} className="icon-item"><img width={64} height={64} src={url}></img><div>{name}</div><a download href={url}>Download</a></div>
            );
        }
        icons.push(item);
    });

    function filterEnabled() {
        if (!bc) {
            return (
                <InnoSelect label='Select download color' value={color} onValueChanged={value => { setColor(value.detail); }}>
                    <InnoSelectItem id="white" value='white' label='white'></InnoSelectItem>
                    <InnoSelectItem id="powergrey" value='powergrey' label='powergrey'></InnoSelectItem>
                    <InnoSelectItem id='lime' value='lime' label='lime'></InnoSelectItem>
                </InnoSelect>);
        }
        return null;
    }

    let filterUX = filterEnabled();

    return (
        <div className="icon-table-wrapper">
            <div className="options">
                {filterUX}
                <InnoInput label="Search" variant="light" onValueChanged={(value) => filterlist(value)}>
                    <input type="string" />
                </InnoInput>
                <a download href={`/brand-experience/svg/${color}/innoicons_${color}.zip`}>Download all</a>
            </div>
            <div className="icons">
                {icons}
            </div>
        </div>
    );
}
