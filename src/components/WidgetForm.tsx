import { useState } from "react";
import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/images/Figmoji/bug.svg';
import ideaImageUrl from '../assets/images/Figmoji/idea.svg';
import thoughtImageUrl from '../assets/images/Figmoji/thought.svg';

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },  
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },  
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }, 
    },
}

//(Aula 2 - 45:46)
type FeedbackType = keyof typeof feedbackTypes;

/*
(Aula 2 - 32:46)

É um array de arrays
Object.entries(feedbackTypes) => [ 
    ['BUG', {...}], 
    ['IDEA', {...}], 
    ['OTHER', {...}] 
]

ex: chama o feedbackTypes com o map para percorres o vetor e retornar a informação
 {Object.entries(feedbackTypes).map()}
*/

export function WidgetForm() {

    //State (Aula 2 - 42:03)
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 mb-2 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            type="button"
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            //Onclick (Aula 2 - 42:47) passar um valor em um metodo
                            onClick={() => setFeedbackType(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                }) }
            </div>

            <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br" target="_blank">Rocketseat</a>
            </footer>
        </div>
    )
}