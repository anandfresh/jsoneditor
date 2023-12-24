import React from 'react'
import ace from 'brace'
import { JsonEditor as Editor } from 'jsoneditor-react'

import '@contentful/forma-36-react-components/dist/styles.css'
import 'jsoneditor-react/es/editor.min.css'
import 'brace/mode/json'
import 'brace/theme/github'
import './styles.css'

import data from './data'

export default function App() {
  const [json, setJson] = React.useState(data)

  return (
    <div className="App">
      <Editor
        mode="tree"
        history
        value={json}
        onChange={setJson}
        ace={ace}
        theme="ace/theme/github"
      />
    </div>
  )
}
