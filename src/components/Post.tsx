import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css';
import { Coments } from './Comets';
import { Avartar } from './Avatar';
import { FormEvent, useState , ChangeEvent, InvalidEvent} from 'react';


interface Athuor {
name:string;
role:string;
AvatarUrl:string;

}
interface Content {
    type: 'link' | 'paragraph';
    content: string;
  }
interface PostProps {
    author: Athuor;
    publishedDate:Date;
    content:Content[];
}


export function Post({ author, content, publishedDate }:PostProps) {


    const [comments, setComet] = useState([
        'Ola ysaak'
    ])

    function deleteCommets(commetToDelete:string){
    const commetsWithouDeleteOne = comments.filter(coment=>{
         return coment !== commetToDelete
    })

    setComet(commetsWithouDeleteOne)

    }


    const [newCommented, setNewCommented] = useState('')

    const date = new Date('2202-06-13')

    const publisheFromat = format(new Date('2202-06-13'), "d 'de' LLLL 'ás' HH:mm 'h'", {
        locale: ptBR
    })

    const publishedDateRelative = formatDistanceToNow(new Date('2022-06-13'), {
        locale: ptBR,
        addSuffix: true
    })


    function handleCrateNewComment(event:FormEvent) {

        event.preventDefault();

        setComet([...comments, newCommented])

        setNewCommented('');


    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        setNewCommented(event.target.value);
        event.target.setCustomValidity('')

    }
    function handleNewCommentIvanlid(event:InvalidEvent<HTMLTextAreaElement>){
       event.target.setCustomValidity('Esse campo é obrigatorio ysaak')
    }

const isNewCommentEmpty = newCommented.length ==0;
    return (
        <article className={styles.post} >
            <header>
                <div className={styles.author} >
                    <Avartar src={author.AvatarUrl} />
                    <div className={styles.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publisheFromat} dateTime={date.toISOString()} >
                    {publishedDateRelative}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return (
                        <p
                         key={line.content} >{line.content}
                        </p>)
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCrateNewComment} className={styles.comentForm} >
                <strong>Deixe o seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe o seu comentario'
                    onChange={handleNewCommentChange}
                    value={newCommented}
                    required
                    onInvalid={handleNewCommentIvanlid}

                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
                </footer>
            </form>
            <div>
                {comments.map(coment => {
                    console.log(coment)
                    return <Coments key={coment} content={coment} deleteCommets={deleteCommets} />
                })}

            </div>
        </article>
    )
}