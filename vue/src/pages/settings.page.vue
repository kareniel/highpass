<template>
  <div>
    <Navbar></Navbar>

    <Header title="Settings"></Header>

    <Content>

      <p class="title is-5">Flags</p>
      
      <p></p>  
        
      <b-field label="Downloadable" type="is-danger">
          <b-switch v-model="downloadable"
            true-value="1"
            false-value="0"
          size="is-small">
            {{ downloadable ? 'Yes' : 'No' }}
          </b-switch>
      </b-field>

      <hr>
      
      <p class="title is-5">Duration</p>
    
      <p>I like 12 minutes because most tracks I play will be shorter than that.</p>  

      <div class="columns">
        <div class="column is-8">

            <b-field horizontal class="minutes" label="From">
              <b-input type="number" v-model="duration.from" min="0" max="999" placeholder="From">
              </b-input>
            </b-field>

            <b-field horizontal class="minutes" label="To">
              <b-input type="number" v-model="duration.to" min="1" max="999"  placeholder="To">
              </b-input>
            </b-field>


        </div>
      </div>

      <hr>

      <p class="title is-5">Ignored Tags</p>

      <p>You can choose to filter out certain music genres or file types by ignoring tracks with a certain tag.</p>  
        
      <b-field>
        <b-taginput placeholder="Add a tag" v-model="tags">
        </b-taginput>
      </b-field>

    </Content>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4 is-offset-1">
                <div class="level">
                  
                  <div class="level-left"></div>
                  <div class="level-right">
                    
                    <button class="button is-large is-primary">Save</button>

                  </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container ">
        <p class="has-text-grey-light">© 2018 Jonathan Dupré</p>
      </div>
    </footer>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'

export default {
  name: 'SettingsPage',
  components: {
    Navbar,
    Header,
    Content
  },
  data () {
    return {
      downloadable: 1,
      duration: { from: 0, to: 12 },
      tags: [ 'dubstep', 'trap', 'minimix', 'brostep' ]
    }
  }
}
</script>

<style scoped>
</style>
