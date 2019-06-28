import React from 'react'

export default function EventForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          Name:
          <input name='name' type='text' value={props.values.name} onChange={props.onChange}/>
        </label>
        <label>
          Date:
          <input name='date' type='text' value={props.values.date} onChange={props.onChange}/>
        </label>
        <label>
          Description:
          <input name='description' type='text' value={props.values.description} onChange={props.onChange}/>
        </label>
        <button>Save</button>
      </form>
    </div>
  )
}
