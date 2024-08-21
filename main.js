const getParameters = () => (
    Object.fromEntries(location.search.substring(1).split('&').map(item => item.split('=')))
);

const parametersHandlers = {
    theme: value => {
        value = value === 'dark' ? 'dark' : 'light';
        console.log(document.body);
        document.body.classList.add(value);
    }
};

const parameters = getParameters();

for ( const parameterName in parametersHandlers ) {
    const parameter = parameters[parameterName];

    if ( parameter !== undefined ) {
        parametersHandlers[parameterName](parameter);
    }
}
