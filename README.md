## Installation

```html
<!-- HTML Imports and Custom Elements v1 polyfills -->
<script src="https://unpkg.com/webcomponents.js@0.7.23/HTMLImports.min.js"></script>
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<link href="https://unpkg.com/shaf-chart@1.0.3/imports.html" rel="import">
```

## Basic usage

```html
<shaf-chart>
  <table>
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

## Roadmap

* Fix Safari color issues
* Check IE
* Inherit width/height from element attributes
