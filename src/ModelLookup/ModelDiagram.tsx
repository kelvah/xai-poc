import React from 'react';


const ModelDiagram = () => {

    const kogitoIframe = () => {
        return {__html: `<iframe src="https://kiegroup.github.io/kogito-online/?file=https://raw.githubusercontent.com/kiegroup/kogito-tooling/master/packages/online-editor/static/samples/sample.bpmn#/editor/bpmn"></iframe>`};
    };

    return (
        <div className="model-diagram">
            <div className="model-diagram__iframe" dangerouslySetInnerHTML={kogitoIframe()} />
        </div>
    );
};

export default ModelDiagram;