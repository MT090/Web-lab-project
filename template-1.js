<script>
  document.querySelectorAll('.see-project').forEach((button, index)  {
    button.addEventListener('click', () => {
    
      window.location.href = `project${index + 1}.html`;
    })
  })
</script>
