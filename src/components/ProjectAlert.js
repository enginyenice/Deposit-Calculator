import React, { Component } from 'react'
import { Alert,Table } from 'react-bootstrap';
export default class ProjectAlert extends Component {
    render() {
        return (
            <>
            <Alert variant="info" className="mt-1">
            <strong>Formül: </strong>   (Ana para * faiz oranı * vade (gün))/36500
            </Alert>  

            <Alert variant="primary" className="mt-1">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>6 Aya Kadar</th>
      <th>6 Ay - 1 Yıl</th>
      <th>1 Yıl Üzeri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>%5</td>
      <td>%3</td>
      <td>%0</td>
    </tr>
      </tbody>
</Table>
            </Alert>  

            </>
        )
    }
}
