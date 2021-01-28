import { useState } from 'react';
import FormInput from '../../component/form-input/form-input.component';
import { createQuestion } from '../../firebase/firebase.utilis';

import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const QuestionCreate = () => {
    const { id } = useParams();
    const [userCredentials, setUserCredentials] = useState({ answerSelectionType: '', question: '', option1: '', option2: '', option3: '', option4: '', correctAnswer: '', marks: '' })

    const { answerSelectionType, question, option1, option2, option3, option4, correctAnswer, marks } = userCredentials
    const handleSubmit = async e => {
        e.preventDefault();
        createQuestion(id, userCredentials)
        setUserCredentials({ answerSelectionType: '', question: '', option1: '', option2: '', option3: '', option4: '', correctAnswer: '', marks: '' })

    }
    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className="container">
            <h1>Give the question Details</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='answerSelectionType'
                    type='text'
                    value={answerSelectionType}
                    required
                    handleChange={handleChange}
                    label='answerSelectionType'
                />
                <FormInput
                    name='question'
                    type='text'
                    value={question}
                    required
                    handleChange={handleChange}
                    label='question'
                />
                <FormInput
                    name='option1'
                    type='text'
                    value={option1}
                    required
                    handleChange={handleChange}
                    label='option1'
                />
                <FormInput
                    name='option2'
                    type='text'
                    value={option2}
                    required
                    handleChange={handleChange}
                    label='option2'
                />
                <FormInput
                    name='option3'
                    type='text'
                    value={option3}
                    required
                    handleChange={handleChange}
                    label='option3'
                />
                <FormInput
                    name='option4'
                    type='text'
                    value={option4}
                    required
                    handleChange={handleChange}
                    label='option4'
                />
                <FormInput
                    name='correctAnswer'
                    type='text'
                    value={correctAnswer}
                    required
                    handleChange={handleChange}
                    label='correctAnswer'
                />
                <FormInput
                    name='marks'
                    type='text'
                    value={marks}
                    required
                    handleChange={handleChange}
                    label='marks'
                />
                <Button variant="primary" type="submit">Send</Button>
            </form>
        </div>
    );
}

export default QuestionCreate;