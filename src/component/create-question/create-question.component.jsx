import { useState } from 'react'
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import './create-question.styles.scss';
import { updateExam } from '../../firebase/firebase.utilis';

const CreateQuestion = () => {
    let data;
    const [questionInfo, setQuestionInfo] = useState({ examName: '', question: '' })
    const { questionID } = useParams();
    const { examName, question } = questionInfo;




    const handleChange = e => {
        const { value, name } = e.target
        setQuestionInfo({ ...questionInfo, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (examName === '' || question === '') {
            alert('Feild cannot be empty')
            return;
        }
        const questionParsed = JSON.parse(question)


        updateExam(questionID, questionParsed, examName)
        setQuestionInfo({ examName: '', question: '' })


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h1>Create question</h1>
                    <form className='' noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField id="standard-basic" label="Exam Name" className="question-input" name='examName' value={examName} onChange={handleChange} />
                        <TextareaAutosize rowsMax={4} aria-label="empty textarea" placeholder="Question Markup" className='text-area-react' value={question} name='question' onChange={handleChange} />

                        <Button className='btn' type='submit' >Upload</Button>

                    </form>
                </div>

            </div>
        </div>

    );
}

export default CreateQuestion;