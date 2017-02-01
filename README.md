## Installation

```html
<!-- Custom Elements v1 polyfill -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<script src="https://unpkg.com/chart.js@2.4.0/dist/Chart.min.js"></script>
<script src="https://unpkg.com/shaf-chart@1.1.5/index.js"></script>
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

* Inherit width/height from element attributes
* show-table attribute

## See also

* [shaf-button](https://github.com/aaronshaf/shaf-button)
* [shaf-toggle](https://github.com/aaronshaf/shaf-toggle)
* [shaf-star-rating](https://github.com/aaronshaf/shaf-star-rating)
* [shaf-unified-diff](https://github.com/aaronshaf/shaf-unified-diff)
* [shaf-timeago](https://github.com/aaronshaf/shaf-timeago)
