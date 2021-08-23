import { useRecoilValue } from "recoil"
import { argumentIdState } from "../../state/atoms"
import Editor from "../editor"

const EditorLogicContainer = () =>{
    const argumentId = useRecoilValue(argumentIdState)
    const currentId = argumentId.length-1
    return( <><Editor itemKey={currentId}/></>)
}

export default EditorLogicContainer