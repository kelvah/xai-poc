import React from 'react';


const ModelDiagram = (props:{selectedVersion: string}) => {
    const {selectedVersion} = props;
    const editorUrl = "https://kiegroup.github.io/kogito-online/?file=https://raw.githubusercontent.com/kiegroup/kogito-tooling/master/packages/online-editor/static/samples/sample.bpmn#/editor/bpmn";
    const kogitoIframe = () => {
        return {__html: `<iframe src=${editorUrl} data-key="${selectedVersion}"></iframe>`};
    };

    return (
        <div className="model-diagram">
            <div className="model-diagram__iframe" dangerouslySetInnerHTML={kogitoIframe()} />
        </div>
    );
};

export default ModelDiagram;