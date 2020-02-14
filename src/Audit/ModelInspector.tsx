import React from 'react';
import {Modal, Button, FlexItem, Flex} from '@patternfly/react-core';
import { ApplicationsIcon } from '@patternfly/react-icons'
type stateType = {
    isModalOpen: boolean
}
type propstype = {
    model: {
        version: string,
        history?: string[]
    }
};
class ModelInspector extends React.Component<propstype, stateType> {
    constructor(props:propstype) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }
    handleModalToggle = () => {
        this.setState(({ isModalOpen }) => ({
            isModalOpen: !isModalOpen
        }));
    };
    kogitoIframe = () => {
        return {__html: `<iframe src="https://kiegroup.github.io/kogito-online/?file=https://raw.githubusercontent.com/kiegroup/kogito-tooling/master/packages/online-editor/static/samples/sample.bpmn#/editor/bpmn"></iframe>`};
    };

    render() {
        const { isModalOpen } = this.state;
        const { version, history} = this.props.model;
        return (
            <React.Fragment>
                <Button variant="link" isInline onClick={this.handleModalToggle}>View Model <ApplicationsIcon /></Button>
                <Modal
                    isLarge
                    title="Model inspection"
                    isOpen={isModalOpen}
                    onClose={this.handleModalToggle}
                    className="editor"
                >
                    <div className="editor__wrap">
                        <div className="editor__switch">
                            <Flex>
                                <FlexItem>
                                    Version: {version}
                                </FlexItem>
                                <FlexItem>
                                    <label>History: </label>
                                    <select name="" id="">
                                        {history && history.map((option, index) => (
                                            <option
                                                key={index}
                                                value={option}
                                            >{option}</option>
                                        ))}
                                    </select>
                                </FlexItem>
                            </Flex>
                        </div>
                        <div className="editor__iframe" dangerouslySetInnerHTML={this.kogitoIframe()} />
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModelInspector;