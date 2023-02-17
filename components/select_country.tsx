'use client'

import Select from 'react-select'

const options: { 
	value: string; 
	label: string;
}[] = [
	{ value: 'World', label: 'World' },
	{ value: 'Sweden', label: 'Sweden' },
	{ value: 'USA', label: 'USA' },
];

function handleSelect(e) {
	console.log(e.value)
}

export default function SelectCountry() {
	return (
		<>
			<p>Select country</p>
			<Select
				id="selectbox"
        instanceId="selectbox"
				options={options}
				onChange={handleSelect}
			/>
		</>
	)
}