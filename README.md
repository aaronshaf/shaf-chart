## Getting started

### With HTML Imports

```html
<script src="https://unpkg.com/webcomponents.js@0.7.23/HTMLImports.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.1.1/document-register-element.js"></script>
<link href="https://unpkg.com/shaf-chart/imports.html" rel="import">
```

## Basic usage

```html
<shaf-chart>
  <table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Unique visitors</th>
        <th>Pageviews</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>2016-11-18</th>
        <td>31</td>
        <td>51</td>
      </tr>
      <tr>
        <th>2016-11-19</th>
        <td>34</td>
        <td>76</td>
      </tr>
    </tbody>
  </table>
</shaf-chart>
```
