export const Stepper = ({ step }: { step: number }) => {
    return (
        <ol className="items-center flex space-x-8 space-y-0 w-full sm:w-2/3 px-8 sm:px-0 mx-auto">
            <li className={`flex items-center ${ step === 1 ? 'text-blue-600' : 'text-gray-500' } space-x-2.5 w-1/3`}>
                <span className={`text:lg md:text-xl lg:text-2xl xl:text-4xl w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 flex border ${ step === 1 ? 'border-blue-600' : 'border-gray-500' } rounded-full shrink-0 items-center justify-center`}>
                    1
                </span>
                <span>
                    <h3 className="text-md lg:text-xl xl:text-2xl leading-tight">Ingresa tu currículum</h3>
                    <p className="text-sm lg:text-md xl:text-lg hidden xl:block">Copia y pega tu currículum en el área de texto proporcionada</p>
                </span>
            </li>
            <li className={`flex items-center ${ step === 2 ? 'text-blue-600' : 'text-gray-500' } space-x-2.5 w-1/3`}>
                <span className={`text:lg md:text-xl lg:text-2xl xl:text-4xl w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 flex border ${ step === 2 ? 'border-blue-600' : 'border-gray-500' } rounded-full shrink-0 items-center justify-center`}>
                    2
                </span>
                <span>
                    <h3 className="text-md lg:text-xl xl:text-2xl leading-tight">Visualiza tu currículum</h3>
                    <p className="text-sm lg:text-md xl:text-lg hidden xl:block">Observa una vista previa formateadad de tu currículum</p>
                </span>
            </li>
            <li className={`flex items-center ${ step === 3 ? 'text-blue-600' : 'text-gray-500' } space-x-2.5 w-1/3`}>
                <span className={`text:lg md:text-xl lg:text-2xl xl:text-4xl w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 flex border ${ step === 3 ? 'border-blue-600' : 'border-gray-500' } rounded-full shrink-0 items-center justify-center`}>
                    3
                </span>
                <span>
                    <h3 className="text-md lg:text-xl xl:text-2xl leading-tight">Carga tu currículum</h3>
                    <p className="text-sm lg:text-md xl:text-lg hidden xl:block">Carga fácilmente tu currículum formateado en Infojobs</p>
                </span>
            </li>
        </ol>
    )
}