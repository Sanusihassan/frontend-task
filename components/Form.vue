<template>
  <div class="container mx-auto px-4">
    <form class="flex flex-col submit-form">
      <label for="main-category" class="label"
        >Main Category <span class="text-red-400">*</span>
      </label>
      <select
        name="main-category"
        value="CARS MOTORCYCLES & ACCESSORIES"
        class="menu"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <label for="sub-category" class="label"
        >Sub Category <span class="text-red-400">*</span>
      </label>
      <select name="sub-category" value="CARS" class="menu">
        <option value="Honda HR-V. RM 114,800.">Honda HR-V. RM 114,800.</option>
        <option value="Perodua Alza. RM 62,500.">
          Perodua Alza. RM 62,500.
        </option>
        <option value="Honda City. RM 74,191.">Honda City. RM 74,191.</option>
        <option value="Honda City Hatchback. RM 78,600.">
          Honda City Hatchback. RM 78,600.
        </option>
      </select>
      <label for="process-type" class="label"
        >Sub Category <span class="text-red-400">*</span>
      </label>
      <select name="process-type" value="Other" class="menu">
        <option value="Other">Other</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
      </select>
      <input type="text" placeholder="from user" />
      <label for="brand" class="label">Brand</label>
      <select name="brand" value="a" class="menu">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
      <label for="transmission-type" class="label">transmission type</label>
      <select
        name="transmission-type"
        class="menu"
        value="Select Transmission Type"
      >
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
    </form>
  </div>
</template>
