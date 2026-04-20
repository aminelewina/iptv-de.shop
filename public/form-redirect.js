/**
 * Form Redirect Handler - Vanilla JavaScript
 * Production-ready code for handling form submissions and redirecting to tracking URL
 * Works with multiple forms on the same page
 */

(function() {
  'use strict';

  const REDIRECT_BASE_URL = 'https://t.trklinkx.com/click?pid=3137&offer_id=10622';

  /**
   * Initialize form redirect handlers
   * @param {string|string[]} formSelectors - CSS selector(s) for forms
   * @param {Object} options - Configuration options
   */
  window.initFormRedirect = function(formSelectors, options) {
    options = options || {};
    
    // Default field name mapping
    const fieldMapping = {
      name: options.nameField || 'name',
      surname: options.surnameField || 'surname',
      email: options.emailField || 'email',
      phone: options.phoneField || 'phone',
      address: options.addressField || 'address',
      city: options.cityField || 'city',
      subsource: options.subsourceField || 'subsource'
    };

    // Convert single selector to array
    const selectors = Array.isArray(formSelectors) ? formSelectors : [formSelectors];

    // Attach event handlers to all matching forms
    selectors.forEach(function(selector) {
      const forms = document.querySelectorAll(selector);
      
      forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          handleFormSubmit(form, fieldMapping);
        });
      });
    });
  };

  /**
   * Handle form submission
   */
  function handleFormSubmit(form, fieldMapping) {
    // Extract form data
    const formData = extractFormData(form, fieldMapping);

    // Validate required fields
    if (!validateFormData(formData)) {
      console.error('Form validation failed: Missing required fields');
      alert('Please fill in all required fields');
      return;
    }

    // Build and execute redirect
    const redirectUrl = buildRedirectUrl(formData);
    window.location.href = redirectUrl;
  }

  /**
   * Extract data from form fields
   */
  function extractFormData(form, fieldMapping) {
    function getFieldValue(fieldName) {
      if (!fieldName) return '';

      // Try multiple strategies to find the field
      let field = form.querySelector('[name="' + fieldName + '"]');
      if (!field) field = form.querySelector('#' + fieldName);
      if (!field) field = form.querySelector('.' + fieldName);
      
      return field && field.value ? field.value.trim() : '';
    }

    return {
      name: getFieldValue(fieldMapping.name),
      surname: getFieldValue(fieldMapping.surname),
      email: getFieldValue(fieldMapping.email),
      phone: getFieldValue(fieldMapping.phone),
      address: getFieldValue(fieldMapping.address),
      city: getFieldValue(fieldMapping.city),
      subsource: getFieldValue(fieldMapping.subsource)
    };
  }

  /**
   * Validate form data
   */
  function validateFormData(data) {
    return !!(
      data.name &&
      data.surname &&
      data.email &&
      data.phone &&
      data.address &&
      data.city &&
      data.subsource
    );
  }

  /**
   * Build redirect URL with encoded parameters
   */
  function buildRedirectUrl(data) {
    const params = [
      'sub3=' + encodeURIComponent(data.subsource),
      'sub9=' + encodeURIComponent(data.name),
      'sub10=' + encodeURIComponent(data.surname),
      'sub11=' + encodeURIComponent(data.email),
      'sub12=' + encodeURIComponent(data.phone),
      'sub13=' + encodeURIComponent(data.address),
      'sub15=' + encodeURIComponent(data.city)
    ];

    return REDIRECT_BASE_URL + '&' + params.join('&');
  }

  /**
   * Auto-initialize on DOM ready if data-auto-init attribute is present
   */
  function autoInit() {
    const forms = document.querySelectorAll('form[data-redirect-form]');
    if (forms.length > 0) {
      window.initFormRedirect('form[data-redirect-form]');
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

})();
