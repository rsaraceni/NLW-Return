import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/images/Figmoji/bug.svg';
import ideaImageUrl from '../../assets/images/Figmoji/idea.svg';
import thoughtImageUrl from '../../assets/images/Figmoji/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
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
export type FeedbackType = keyof typeof feedbackTypes;

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

            {/* se eu não tenho um feedbackType ainda preenchido ai eu mostro a div */}
            {/* se não  */}
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
            ) : (
                <p>Hello World</p>
            )}

            <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br" target="_blank">Rocketseat</a>
            </footer>
        </div>
    )
}

            
