

export default function Imagem({ rounded, folder, imgName }) {
    if (!rounded) rounded = '0px';


    const path = folder ? `./imagens/${folder}/${imgName}` : `./imagens/${imgName}`;
    
    return (
        <>
            <img alt="Imagem do player"
            width={100}
            height={100}
            style={{
                borderRadius: rounded,
            }}
            className="imagemJSX"
            src={path}
            />

        </>
    )
}